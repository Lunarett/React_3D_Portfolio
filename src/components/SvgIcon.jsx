const SvgIcon = ({ svg, width = '16', height = '16', fill = 'currentColor', className = '', ...props }) => {
    return (
      <div className={className} {...props}>
        <div
          dangerouslySetInnerHTML={{ __html: svg }}
          style={{ width, height, fill }}
        />
      </div>
    );
  };

export default SvgIcon;