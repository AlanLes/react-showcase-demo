import React from 'react';
import { useTheme, Theme, Typography, Button, ButtonGroup } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(4),
        },
        sectionTitle: {
            marginBottom: theme.spacing(2),
        },
        label: {
            marginBottom: theme.spacing(1),
        },
        buttonGroupContainer: {
            marginBottom: theme.spacing(1),
        },
    })
);

export const TextButtonGroupExample: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Default
                </Typography>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Active
                    </Typography>
                    <ButtonGroup variant="text">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <ButtonGroup variant="text" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Primary
                </Typography>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Active
                    </Typography>
                    <ButtonGroup variant="text" color="primary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <ButtonGroup variant="text" disabled color="primary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant={'body1'} className={classes.sectionTitle}>
                    Secondary
                </Typography>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Active
                    </Typography>
                    <ButtonGroup variant="text" color="secondary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
                <div className={classes.buttonGroupContainer}>
                    <Typography variant={'body2'} className={classes.label}>
                        Disabled
                    </Typography>
                    <ButtonGroup variant="text" disabled color="secondary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
};