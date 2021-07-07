import React, { useState, useCallback, useEffect } from 'react';
import top from '../topology_40.png';
import {  Menu } from '@material-ui/icons';
import { useMediaQuery, makeStyles } from '@material-ui/core';
import EatonLogo from '../EatonLogo.svg';
import { useHistory, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import {
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerFooter,
    DrawerHeader,
    NavItem,
} from '@pxblue/react-components';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../__types__';
import { CLOSE_DRAWER, TOGGLE_DRAWER } from '../redux/actions';
import { SimpleNavItem, pageDefinitions } from './navigation';

const useStyles = makeStyles({
    iconFlip: {
        transform: 'scaleX(-1)',
    },
});

export const NavigationDrawer: React.FC = () => {
    const open = useSelector((store: AppStore) => store.app.drawerOpen);
    const direction = useSelector((store: AppStore) => store.app.direction);
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState(location.pathname);
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const rtl = direction === 'rtl';
   
    const createNavItems = useCallback((navData: SimpleNavItem[], parentUrl: string, depth: number): NavItem[] => {
        const convertedItems: NavItem[] = [];
        for (let i = 0; i < navData.length; i++) {
            const item = navData[i];
            if (item.hidden) {
                continue;
            }
            const fullURL = `${parentUrl}${item.url || ''}`;
            convertedItems.push({
                title: item.title,
                subtitle: item.subtitle,
                icon: depth === 0 ? item.icon : undefined,
                itemID: fullURL,
                onClick: item.component
                    ? (): void => {
                          history.push(fullURL);
                          dispatch({ type: TOGGLE_DRAWER, payload: false });
                      }
                    : undefined,
                items: item.pages ? createNavItems(item.pages, `${parentUrl}${item.url || ''}`, depth + 1) : undefined,
            });
        }
        return convertedItems;
    }, []);

     useEffect(() => {
        setActiveRoute(location.pathname);
    }, [location.pathname]);

    const [menuItems] = useState(createNavItems(pageDefinitions, '', 0));

    return (
        <Drawer
            open={open}
            width={332}
            ModalProps={{
                onBackdropClick: (): void => {
                    dispatch({ type: CLOSE_DRAWER });
                },
            }}
            activeItem={activeRoute}
            activeItemBackgroundShape={'round'}
            variant={xsDown ? 'temporary' : 'persistent'}
        >
            <DrawerHeader
                title={'Showcase App'}
                backgroundColor={Colors.blue[500]}
                fontColor={Colors.white[50]}
                backgroundImage={top}
                icon={<Menu className={clsx({ [classes.iconFlip]: rtl })} />}
                onIconClick={(): void => {
                    dispatch({ type: TOGGLE_DRAWER });
                }}
            />
            <DrawerBody>
               <DrawerNavGroup items={menuItems} />
            </DrawerBody>
            <DrawerFooter>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={EatonLogo}
                        style={{ margin: theme.spacing(1) }}
                        alt="Eaton Logo"
                        height={50}
                        width={'auto'}
                    />
                </div>
            </DrawerFooter>
        </Drawer>
    );
};
