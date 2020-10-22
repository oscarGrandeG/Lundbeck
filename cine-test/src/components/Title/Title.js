import * as React from 'react';
import Typography from '@material-ui/core/Typography';

function Title(props) {
    const {title, variant, color} = props;
  return (
    <>
        <Typography
            style={{ color: color || '#737373' }}
            variant={variant}
            gutterBottom
        >
            {title}
        </Typography>
    </>
  );
};

export default Title;