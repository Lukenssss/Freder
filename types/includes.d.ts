import { Session } from 'next-auth'

type BoardProps = {
    session: Session;
}

type CardProps = {
    id: string | undefined;
    url: string | undefined;
    title: string | undefined;
    price: number | undefined;
    width: string | undefined;
}

type ItemProps = {
    id: string;
}

type ModalProps = {
    opened: boolean;
}