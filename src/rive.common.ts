import {Property, View, booleanConverter} from '@nativescript/core';
import {RiveAlignment, RiveDirection, RiveFit, RiveLoop} from "@nativescript-community/ui-rive/index";

export abstract class RiveViewBase extends View {
    public src: string;
    public autoPlay: boolean;
    public alignment: RiveAlignment;
    public fit: RiveFit;
    public artboard: string | null

    /*
    * loop: default AUTO
    * direction: default AUTO
    * */
    public abstract play(loop?: RiveLoop, direction?: RiveDirection, settleInitialState?: true): void;

    /*
    * loop: default AUTO
    * direction: default AUTO
    * */
    public abstract playWithAnimations(animationNames: string[], loop?: RiveLoop, direction?: RiveDirection, areStateMachines?: false, settleInitialState?: true): void;

    /*
    * loop: default AUTO
    * direction: default AUTO
    * */
    public abstract playWithAnimation(animationName: string, loop?: RiveLoop, direction?: RiveDirection, areStateMachines?: false, settleInitialState?: true): void;

    public abstract stop(): void;

    public abstract stopWithAnimations(animationNames: string[], areStateMachines?: false): void;

    public abstract stopWithAnimation(animationName: String, isStateMachine?: false): void;

    public abstract pause(): void;

    public abstract pauseWithAnimation(animationName: string, areStateMachines?: false): void;

    public abstract pauseWithAnimations(animationNames: string[], areStateMachines?: false): void;

    public abstract reset(): void;

    public abstract fireState(stateMachineName: string, inputName: string): void;

    public abstract setBooleanState(stateMachineName: string, inputName: string, value: boolean): void;

    public abstract setNumberState(stateMachineName: string, inputName: string, value: number): void;

    public abstract isPlaying(): boolean;

    public abstract getStateMachines();

    public abstract getAnimations();
}

export const srcProperty = new Property<RiveViewBase, string>({
    name: 'src'
});
srcProperty.register(RiveViewBase);

export const autoPlayProperty = new Property<RiveViewBase, boolean>({
    name: 'autoPlay',
    defaultValue: true,
    valueConverter: booleanConverter
});
autoPlayProperty.register(RiveViewBase);

export const fitProperty = new Property<RiveViewBase, RiveFit>({
    name: 'fit',
    defaultValue: RiveFit.CONTAIN,
    affectsLayout: global.isIOS
});
fitProperty.register(RiveViewBase);

export const alignmentProperty = new Property<RiveViewBase, RiveAlignment>({
    name: 'alignment',
    defaultValue: RiveAlignment.CENTER,
    affectsLayout: global.isIOS
});
alignmentProperty.register(RiveViewBase);

export const artboardProperty = new Property<RiveViewBase, (string | null)>({
    name: 'artboard',
    defaultValue: null,
});
artboardProperty.register(RiveViewBase);







