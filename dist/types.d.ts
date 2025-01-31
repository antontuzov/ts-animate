export type AnimationType = 'fadeIn' | 'fadeOut' | 'slide' | 'scale' | 'rotate' | 'bounce' | 'flip';
export type AnimationEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
export interface AnimationOptions {
    duration?: number;
    delay?: number;
    easing?: AnimationEasing;
    iterations?: number;
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
    onStart?: () => void;
    onEnd?: () => void;
}
export interface Animation {
    element: HTMLElement;
    type: AnimationType;
    options?: AnimationOptions;
}
