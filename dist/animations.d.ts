import { AnimationType, AnimationOptions } from './types';
export declare class TSAnimate {
    private element;
    private queue;
    private onAnimationStart;
    private onAnimationEnd;
    constructor(element: HTMLElement);
    addAnimation(type: AnimationType, options?: AnimationOptions): this;
    onStart(callback: () => void): this;
    onEnd(callback: () => void): this;
    start(): Promise<void>;
    private applyAnimation;
}
