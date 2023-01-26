/**********************************************************************************
 * (c) 2017, Brad Martin.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           bradwaynemartin@gmail.com
 **********************************************************************************/

import {Color, File, Folder, ImageAsset, knownFolders, Property, Utils} from '@nativescript/core';
import {
    RiveViewBase,
    autoPlayProperty,
    loopProperty,
    srcProperty,
    fitProperty, alignmentProperty, stateMachinProperty, animationProperty, artboardProperty, directionProperty
} from './rive.common';
import {clamp} from './utils';
import Drawable = android.graphics.drawable.Drawable;
import Resources = android.content.res.Resources;
import Fit = app.rive.runtime.kotlin.core.Fit;
import Alignment = app.rive.runtime.kotlin.core.Alignment;
import Loop = app.rive.runtime.kotlin.core.Loop;
import Rive = app.rive.runtime.kotlin.core.Rive;
import Direction = app.rive.runtime.kotlin.core.Direction;
import InputStream = java.io.InputStream;
import Charset = java.nio.charset.Charset;
import FileInputStream = java.io.FileInputStream;

let LottieProperty;
let LottieKeyPath;
let LottieValueCallback;

const cache = new Map();

/*function loadLottieJSON(iconSrc) {
    const app: Folder = <Folder>knownFolders.currentApp();
    const folder: Folder = <Folder>app.getFolder("app/assets");
    const file: File = folder.getFile("button.riv");
    if (!cache.has(iconSrc)) {
        const file = File.fromPath(iconSrc);
        return file.readText().then((r) => {
            cache.set(iconSrc, r);
            return r;
        });
    }
    return Promise.resolve(cache.get(iconSrc));
}*/


export class RiveView extends RiveViewBase {

    bytes: any;
    nativeViewProtected: app.rive.runtime.kotlin.RiveAnimationView;

    public createNativeView() {
        return new app.rive.runtime.kotlin.RiveAnimationView(this._context, null);
    }

    animatorListener;

    public initNativeView(): void {

    }

    public disposeNativeView(): void {

        super.disposeNativeView();
    }

    [srcProperty.setNative](src: string) {
        const view = this.nativeViewProtected;
//TODO

        if (!src) {
            console.log("[ui-rive] File not supported")
        } else if (src.startsWith(Utils.RESOURCE_PREFIX)) {
            const resName = src.replace(Utils.RESOURCE_PREFIX + "raw/", '').replace(".riv", "");
            const inStream: InputStream = this._context.getResources().openRawResource(this._context.getResources().getIdentifier(resName, "raw", this._context.getPackageName()));
            // @ts-ignore
            this.bytes = inStream.readBytes()
        } else {
            if (!/.(json|zip|riv)$/.test(src)) {
                src += '.riv';
            }
            if (src[0] === '~') {
                console.log("[ui-rive] File not supported")
                const app: Folder = <Folder>knownFolders.currentApp();
                const filename = src.replace(/^.*[\\\/]/, '')
                const folder: Folder = <Folder>app.getFolder("app/" + src.substring(2).replace(filename, ""));
                const file: File = folder.getFile(filename);
                const fileText = file.readTextSync(null, "UTF-8");
                console.log(file.path)
                const javaFile = new java.io.File(file.path);
                console.log(this.nativeViewProtected.getFile())
                const targetStream: InputStream = new FileInputStream(javaFile);
                const blob = (Array as any).create("byte", file.size);
                for (let i = 0; i < blob.length; i++) {
                    blob[i] = (file as any)._buffer[i];
                }
                // @ts-ignore
                this.bytes = blob
            } else {
                console.log("[ui-rive] File not supported")
            }
        }

        if (this.autoPlay) {
            this.playAnimation();
        }

    }

    [loopProperty.setNative](loop: Loop) {
        if (this.isAnimating()) {
            this.pauseAnimation();
            this.playAnimation()
        }
    }

    [loopProperty.getDefault](loop: Loop) {
        return Loop.AUTO;
    }


    [autoPlayProperty.setNative](autoPlay: boolean) {
        this.nativeViewProtected.setAutoplay(autoPlay);
    }

    [fitProperty.getDefault]() {
        return Fit.CONTAIN;
    }

    [fitProperty.setNative](value: Fit) {
        this.nativeViewProtected.setFit(value);
    }

    [alignmentProperty.getDefault]() {
        return Alignment.CENTER;
    }

    [alignmentProperty.setNative](value: Alignment) {
        this.nativeViewProtected.setAlignment(value);
    }


    [artboardProperty.getDefault]() {
        return null;
    }

    [artboardProperty.setNative](value: string | null) {
        this.nativeViewProtected.setArtboardName(value);
    }

    [animationProperty.getDefault]() {
        return null;
    }

    [directionProperty.setNative](value: Direction | null) {

    }

    [directionProperty.getDefault]() {
        return Direction.AUTO;
    }

    //TODO:
    [animationProperty.setNative](value: string | null) {
    }

    [animationProperty.getDefault]() {
        return null
    }

    [stateMachinProperty.getDefault]() {
        return null;
    }

    //TODO:
    [stateMachinProperty.setNative](value: string | null) {
    }

    public playAnimation = (): void => {
        if (this.nativeViewProtected) {
            if (!this.isAnimating()) {
                if (this.nativeViewProtected.getAnimations().size() === 0 && !this.animation) {
                    this.nativeViewProtected.setRiveBytes(
                        this.bytes,
                        this.artboard,
                        this.animation,
                        this.stateMachin,
                        this.autoPlay,
                        this.fit,
                        this.alignment,
                        this.loop
                    )
                } else {
                    this.nativeViewProtected.play(this.animation, this.loop, this.direction, false, true)
                }
            }
        }
    };


    public isAnimating(): boolean {
        return this.nativeViewProtected ? this.nativeViewProtected.isPlaying() : false;
    }

    public stopAnimation(): void {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.stop();
        }
    }

    public pauseAnimation(): void {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.pause();

        }
    }
}
