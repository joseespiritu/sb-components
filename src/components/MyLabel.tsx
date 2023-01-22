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
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: MyLabelProps) => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{ color: fontColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
