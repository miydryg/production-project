import { createPortal } from 'react-dom';

interface PortalProps {
    // eslint-disable-next-line no-undef
    children?: React.ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
