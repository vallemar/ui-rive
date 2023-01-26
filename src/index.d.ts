import { Color, View } from '@nativescript/core';
import Loop = app.rive.runtime.kotlin.core.Loop;
import Fit = app.rive.runtime.kotlin.core.Fit;
import Alignment = app.rive.runtime.kotlin.core.Alignment;

export enum RenderMode {
    AUTOMATIC,
    HARDWARE,
    SOFTWARE
}

export class RiveView extends View {
    /**
     * LottieAnimationView
     */
    readonly android: any;

    /**
     * AnimationView
     */
    readonly ios: any;

    constructor();

    autoPlay: boolean;
    artboard: string | null
    animation: string | null
    stateMachin: string | null
    fit: Fit;
    alignment: Alignment;
    loop: Loop;
    src: string | undefined;
    isAnimating(): boolean;
    playAnimation(): void;
    stopAnimation(): void;
    pauseAnimation(): void;
}
