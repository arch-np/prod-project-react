import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = async () =>
    Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

export const useAnimationModules = () =>
    useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    // Создаем рефы, чтобы от рендера к рендеру были значения, без лишних перерисовок
    const SpringRef = useRef<SpringType>(); // Хранится требуемая либа, для дальнейшего обращения к ней
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const defaultValue = useMemo(
        () => ({
            Spring: SpringRef.current,
            Gesture: GestureRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return (
        <AnimationContext.Provider value={defaultValue}>
            {children}
        </AnimationContext.Provider>
    );
};
