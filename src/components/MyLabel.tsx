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

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{ color: fontColor, backgroundColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}

export default MyLabel;