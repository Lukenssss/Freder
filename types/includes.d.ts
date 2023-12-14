import { Session } from 'next-auth'

type BoardProps = {
    session: Session;
}

type CardProps = {
    id: string;
    url: string;
    title: string;
    price: number;
}

type ItemProps = {
    id: string;
}

type ModalProps = {
    opened: boolean;
}