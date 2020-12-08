import React from 'react';
import {
    StyledCheckbox,
    StyledLabel,
    StyledBall,
} from './ThemeSwitcherStyles';

const ThemeSwitcher = () => {
    return (
        <div>
            <StyledCheckbox type="checkbox" id='switcher' />
            <StyledLabel htmlFor="switcher">
                <StyledBall />
            </StyledLabel>
        </div>
    );
}

export default ThemeSwitcher;