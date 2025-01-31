export type AnimationType = 'fadeIn' | 'fadeOut' | 'slide' | 'scale' | 'rotate' | 'bounce' | 'flip';

export type AnimationEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';


export interface AnimationOptions {
    duration?: number;
    delay?: number;
    easing?: AnimationEasing; // CSS easing function
    iterations?: number;
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
    onStart?: () => void; // Callback when the animation starts
    onEnd?: () => void; // Callback when the animation ends

}

export interface Animation {
    element: HTMLElement;
    type: AnimationType;
    options?: AnimationOptions;
}
