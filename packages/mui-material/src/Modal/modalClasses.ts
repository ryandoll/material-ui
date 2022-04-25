import { modalUnstyledClasses } from '@mui/base/ModalUnstyled';

const modalClasses = modalUnstyledClasses;

export type ModalClassKey = keyof typeof modalClasses;

export type ModalClasses = Record<ModalClassKey, string>;

export default modalClasses;
