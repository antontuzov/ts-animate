var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Inject CSS keyframes into the DOM
const injectKeyframes = () => {
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    @keyframes slide {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
    @keyframes scale {
      from { transform: scale(0); }
      to { transform: scale(1); }
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    @keyframes flip {
      from { transform: rotateY(0deg); }
      to { transform: rotateY(180deg); }
    }
  `;
    document.head.appendChild(style);
};
// Inject keyframes when the library is loaded
injectKeyframes();
export class TSAnimate {
    constructor(element) {
        this.queue = [];
        this.onAnimationStart = null;
        this.onAnimationEnd = null;
        this.element = element;
    }
    // Add animation to the queue
    addAnimation(type, options) {
        this.queue.push({ element: this.element, type, options });
        return this;
    }
    // Set event hooks
    onStart(callback) {
        this.onAnimationStart = callback;
        return this;
    }
    onEnd(callback) {
        this.onAnimationEnd = callback;
        return this;
    }
    // Execute animations in sequence
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.onAnimationStart)
                this.onAnimationStart();
            for (const animation of this.queue) {
                yield this.applyAnimation(animation);
            }
            if (this.onAnimationEnd)
                this.onAnimationEnd();
        });
    }
    // Apply individual animation
    applyAnimation(animation) {
        return new Promise((resolve) => {
            const { element, type, options } = animation;
            const { duration = 1000, easing = 'ease', delay = 0, iterations = 1, direction = 'normal', fillMode = 'forwards', onStart, onEnd, } = options || {};
            // Call the onStart callback
            if (onStart)
                onStart();
            // Define animation properties
            element.style.transition = `${duration}ms ${easing}`;
            element.style.animationDuration = `${duration}ms`;
            element.style.animationTimingFunction = easing;
            element.style.animationDelay = `${delay}ms`;
            element.style.animationIterationCount = iterations.toString();
            element.style.animationDirection = direction;
            element.style.animationFillMode = fillMode;
            // Define keyframes or transitions based on animation type
            switch (type) {
                case 'fadeIn':
                    element.style.opacity = '0';
                    element.style.animationName = 'fadeIn';
                    break;
                case 'fadeOut':
                    element.style.opacity = '1';
                    element.style.animationName = 'fadeOut';
                    break;
                case 'slide':
                    element.style.transform = 'translateX(-100%)';
                    element.style.animationName = 'slide';
                    break;
                case 'scale':
                    element.style.transform = 'scale(0)';
                    element.style.animationName = 'scale';
                    break;
                case 'rotate':
                    element.style.transform = 'rotate(0deg)';
                    element.style.animationName = 'rotate';
                    break;
                case 'bounce':
                    element.style.animationName = 'bounce';
                    break;
                case 'flip':
                    element.style.animationName = 'flip';
                    break;
            }
            // Resolve the promise and call the onEnd callback when the animation ends
            element.addEventListener('animationend', () => {
                if (onEnd)
                    onEnd();
                resolve();
            }, { once: true });
        });
    }
}
