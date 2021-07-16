import React from 'react';
import { createStyles, Link, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
        },
        link: {
            marginBottom: theme.spacing(2),
        },
    })
);

const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.info('You clicked a link.');
};

export const LinkExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.container}>
            <Link onClick={handleClick} href="/" className={classes.link}>
                Default
            </Link>
            <Link onClick={handleClick} href="/" color={'primary'} className={classes.link}>
                Primary
            </Link>
            <Link onClick={handleClick} href="/" color={'secondary'} className={classes.link}>
                Secondary
            </Link>
            <Link onClick={handleClick} href="/" color={'textPrimary'} className={classes.link}>
                Text Primary
            </Link>
            <Link onClick={handleClick} href="/" color={'textSecondary'} className={classes.link}>
                Text Secondary
            </Link>
        </div>
    );
};