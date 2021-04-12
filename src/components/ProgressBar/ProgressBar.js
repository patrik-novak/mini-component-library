import React from 'react';
import styled, {css} from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    large: css`
      height: 24px;
      border-radius: 8px;
      padding: 4px;
    `,
    medium: css`
      height: 12px;
      border-radius: 4px;
    `,
    small: css`
      height: 8px;
      border-radius: 4px;
    `,
}

const Wrapper = styled.div`
  ${({size}) => SIZES[size]};
  background-color: ${COLORS.transparentGray15};
  width: 100%;
  box-shadow: inset 0 2px 4px 0 ${COLORS.transparentGray35};
  overflow: hidden;
`

const Progress = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${({value}) => value}%;
  border-radius: 4px 0 0 4px;
`

const ProgressBar = ({value, size}) => {
    return <Wrapper size={size} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"><Progress
        value={value}/><VisuallyHidden>{value}</VisuallyHidden></Wrapper>;
};

export default ProgressBar;
