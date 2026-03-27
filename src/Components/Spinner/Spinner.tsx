import styles from './Spinner.module.css';

interface SpinnerProps {
    size?: number;
    color?: string;
}

const Spinner = ({ size = 40, color = '#667eea' }: SpinnerProps) => {
    return (
        <div className={styles.spinnerContainer}>
            <div 
                className={styles.spinner}
                style={{ 
                    width: `${size}px`, 
                    height: `${size}px`,
                    borderTopColor: color 
                }}
            />
        </div>
    );
};

export default Spinner;
