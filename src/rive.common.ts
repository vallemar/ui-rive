/**********************************************************************************
 * (c) 2017, Nathan Walker.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                           walkerrunpdx@gmail.com
 **********************************************************************************/

import {Property, View, booleanConverter} from '@nativescript/core';
import Loop = app.rive.runtime.kotlin.core.Loop;
import Fit = app.rive.runtime.kotlin.core.Fit;
import Alignment = app.rive.runtime.kotlin.core.Alignment;
import Direction = app.rive.runtime.kotlin.core.Direction;

export abstract class RiveViewBase extends View {
    public src: string;
    public autoPlay: boolean;
    public loop: Loop;
    public alignment: Alignment;
    public direction: Direction | null
    public fit: Fit;
    public artboard: string | null
    public animation: string | null
    public stateMachin: string | null


    public abstract playAnimation(): void;
    public abstract stopAnimation(): void;
    public abstract pauseAnimation(): void;
}

export const srcProperty = new Property<RiveViewBase, string>({
    name: 'src'
});
srcProperty.register(RiveViewBase);

export const autoPlayProperty = new Property<RiveViewBase, boolean>({
    name: 'autoPlay',
    defaultValue: false,
    valueConverter: booleanConverter
});
autoPlayProperty.register(RiveViewBase);

export const loopProperty = new Property<RiveViewBase, Loop>({
    name: 'loop',
    defaultValue: Loop.AUTO,
});
loopProperty.register(RiveViewBase);

export const fitProperty = new Property<RiveViewBase, Fit>({
    name: 'fit',
    defaultValue: Fit.CONTAIN,
    affectsLayout: global.isIOS
});
fitProperty.register(RiveViewBase);

export const alignmentProperty = new Property<RiveViewBase, Alignment>({
    name: 'alignment',
    defaultValue: Alignment.CENTER,
    affectsLayout: global.isIOS
});
alignmentProperty.register(RiveViewBase);

export const artboardProperty = new Property<RiveViewBase, (string | null)>({
    name: 'artboard',
    defaultValue: null,
});
artboardProperty.register(RiveViewBase);

export const animationProperty = new Property<RiveViewBase, (string | null)>({
    name: 'animation',
    defaultValue: null
});
animationProperty.register(RiveViewBase);

export const stateMachinProperty = new Property<RiveViewBase, (string | null)>({
    name: 'stateMachin',
    defaultValue: null
});
stateMachinProperty.register(RiveViewBase);

export const directionProperty = new Property<RiveViewBase, (Direction | null)>({
    name: 'direction',
    defaultValue: null
});
directionProperty.register(RiveViewBase);



