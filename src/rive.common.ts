import {Property, View, booleanConverter} from '@nativescript/core';
import {RiveAlignment, RiveDirection, RiveFit, RiveLoop} from "@nativescript-community/ui-rive/index";

export abstract class RiveViewBase extends View {
    public src: string;
    /* autoplay (optional) - Opening a rive animation view or specifying new resourceName or url will make it automatically play, when it is ready.
     * Default: true
     * Type: boolean
     * */
    public autoPlay: boolean;
    /* alignment. (optional) - Specifies how animation should be aligned inside rive animation view..
     * Default: Alignment.None
     *  Type: Alignment
     * */
    public alignment?: RiveAlignment;
    /*
    * fit (optional) - Specifies how animation should be displayed inside rive animation view
    * Default: Fit.Contain
    * Type: Fit
    * */
    public fit?: RiveFit;
    /*
    * artboardName. (optional) - Specifies which animation artboard should be displayed in rive animation view.
    * Default: null
    * Type: string
    * */
    public artboardName?: string
    /*
    * animationName. (optional) - Specifies which animation should be played when autoplay is set to true.
    * Default: null
    * Type: string
    * */
    public animationName?: string;

    /*
    * stateMachineName. (optional) - Specifies which stateMachine should be played when autoplay is set to true.
    * Default: undefined
    * Type: string
    * */
    public stateMachineName?: string;
    /*
    * loop. (optional).
    * Default: Loop.AUTO
    * Type: Loop
    * */
    public loop?: RiveLoop;

    onPlay: (animationName: string) => void
    onPause: (animationName: string) => void
    onStop: (animationName: string) => void
    onLoopEnd: (animationName: string, loopMode: RiveLoop) => void
    onStateChanged: (stateMachineName: string, stateName: string) => void

    /*
    * loop: default AUTO
    * direction: default AUTO
    * settleInitialState: default true
    * */
    public abstract play(loop?: RiveLoop, direction?: RiveDirection, settleInitialState?: true): void;

    /*
    * animationNames: default []
    * loop: default AUTO
    * direction: default AUTO
    * areStateMachines: default false
    * settleInitialState: default true
    * */
    public abstract playWithAnimations(animationNames?: string | string[], loop?: RiveLoop, direction?: RiveDirection, areStateMachines?: false, settleInitialState?: true): void;

    public abstract stop(): void;

    public abstract stopWithAnimation(animationNames?: string, isStateMachine?: false): void;

    public abstract stopWithAnimations(animationNames: string[], areStateMachines?: false): void;

    public abstract pause(): void;

    /*
    * animationNames: default []
    * areStateMachines: default false
    * */
    public abstract pauseWithAnimations(animationNames: string | string[], areStateMachines?: false): void;

    /*
    * A reference method that will reset the whole artboard. It will play animationName or the first animation (if animationName hasn't been passed) immediately if autoplay hasn't been set to false explicitly.
    * */
    public abstract reset(): void;

    /*
    * stateMachineName - Specifies state machine name which will be matched against all active state machines.
    * inputName - Specifies the name of the trigger that should be fired.
    * */
    public abstract fireState(stateMachineName: string, inputName: string): void;

    /**
     * Update the state of the [SMIBoolean] input called [inputName] on all active matching state machines
     * to [value]
     */
    public abstract setBooleanState(stateMachineName: string, inputName: string, value: boolean): void;

    /*
    * stateMachineName - Specifies state machine name which will be matched against all active state machines.
    * inputName - Specifies name of the input which state should be updated.
    * value - Specifies a value that the input state should be set to.
    * */
    public abstract setNumberState(stateMachineName: string, inputName: string, value: number): void;

    public abstract isPlaying(): boolean;

    public abstract getStateMachines();

    public abstract getAnimations();
}


export const autoPlayProperty = new Property<RiveViewBase, boolean>({
    name: 'autoPlay',
    defaultValue: true,
    valueConverter: booleanConverter
});
autoPlayProperty.register(RiveViewBase);

export const fitProperty = new Property<RiveViewBase, RiveFit>({
    name: 'fit',
    defaultValue: RiveFit.CONTAIN
});
fitProperty.register(RiveViewBase);

export const alignmentProperty = new Property<RiveViewBase, RiveAlignment>({
    name: 'alignment',
    defaultValue: RiveAlignment.CENTER
});
alignmentProperty.register(RiveViewBase);

export const loopProperty = new Property<RiveViewBase, RiveLoop>({
    name: 'loop',
    defaultValue: RiveLoop.AUTO,
});
loopProperty.register(RiveViewBase);

export const artboardNameProperty = new Property<RiveViewBase, (string | null)>({
    name: 'artboardName',
    defaultValue: null,
});
artboardNameProperty.register(RiveViewBase);
export const animationNameProperty = new Property<RiveViewBase, (string | null)>({
    name: 'animationName',
    defaultValue: null,
});
animationNameProperty.register(RiveViewBase);
export const stateMachineNameProperty = new Property<RiveViewBase, (string | null)>({
    name: 'stateMachineName',
    defaultValue: null,
});
stateMachineNameProperty.register(RiveViewBase);


export const onPlayProperty = new Property<RiveViewBase, () => void>({
    name: 'onPlay',
    defaultValue: null,
});
onPlayProperty.register(RiveViewBase);

export const onPauseProperty = new Property<RiveViewBase, () => void>({
    name: 'onPause',
    defaultValue: null,
});
onPauseProperty.register(RiveViewBase);

export const onStopProperty = new Property<RiveViewBase, () => void>({
    name: 'onStop',
    defaultValue: null,
});
onStopProperty.register(RiveViewBase);

export const onLoopEndProperty = new Property<RiveViewBase, () => void>({
    name: 'onLoopEnd',
    defaultValue: null,
});
onLoopEndProperty.register(RiveViewBase);

export const onStateChangedProperty = new Property<RiveViewBase, () => void>({
    name: 'onStateChanged',
    defaultValue: null,
});
onStateChangedProperty.register(RiveViewBase);

export const srcProperty = new Property<RiveViewBase, string>({
    name: 'src'
});
srcProperty.register(RiveViewBase);







