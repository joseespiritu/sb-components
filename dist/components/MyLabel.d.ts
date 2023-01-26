/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje que se va a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño que tomará la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Opción para activar capitalizado
     */
    allCaps?: boolean;
    /**
     * Selecciona color de etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Color personalizado de la fuente
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
