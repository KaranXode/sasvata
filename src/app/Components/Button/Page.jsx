import React from 'react'

export default function Button({ size, variant, label, icon,onClick,className }) {
    const sizeClass = size === 'small' ? 'btn-small' :
        size === 'large' ? 'btn-large' :
            size === 'extra-large' ? 'btn-extra-large' : 'btn-medium';

    const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';

    return (
        <button className={`btn ${sizeClass} ${variantClass} ${className}`} onClick={onClick}>
          <span>  {label}</span>
            {icon && <span className="btn-icon">{icon}</span>}
            
        </button>
    );
}
