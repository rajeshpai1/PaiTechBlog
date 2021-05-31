import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'gatsby';
import classnames from 'classnames';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import withResponsive from 'components/Widgets/withResponsive';
// const Logo = require('../../images/arka-logo.png');
const Logo = require('../../images/LogoMakr-8KKQzl.png');

/**
 * Header class
 * @class
 */
class Header extends React.PureComponent<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {
            fixed: false,
            isHome: false,
            showNavigations: false,
        };
    }

    /**
     * componentDidMount
     */
    componentDidMount() {
        const isHome = window.location.pathname === '/';
        if (isHome) {
            window.addEventListener('scroll', this.scrollListener);
        }
        this.setState({ isHome });
    }

    /**
     * componentWllUnmount
     */
    componentWillUnmount() {
        if (this.state.isHome) {
            window.removeEventListener('scroll', this.scrollListener);
        }
    }

    /**
     * componentDidUpdate
     * @function
     * @param prevProps
     */
    componentDidUpdate(prevProps: IHeaderProps) {
        const { isMobileView } = this.props;
        if (isMobileView === true && isMobileView !== prevProps.isMobileView) {
            this.setState({ showNavigations: false });
        }
    }

    /**
     * scroolListener
     */
    scrollListener = () => {
        const { fixed } = this.state;
        const { pageYOffset } = window;
        if (!fixed && pageYOffset > 5) {
            this.setState({ fixed: true });
        } else if (fixed && pageYOffset < 5) {
            this.setState({ fixed: false });
        }
    };

    /**
     * handleClick
     */
    handleClick = () => {
        this.setState(({ showNavigations }) => ({
            showNavigations: !showNavigations,
        }));
    };

    /**
     * renderNavigations
     */
    renderNavigations = () => {
        const { isMobileView } = this.props;
        const { showNavigations } = this.state;

        return (
            <nav className={'navigation'} hidden={isMobileView && !showNavigations}>
                <ul className = {'button grow_spin'}>
                    <li>
                        <Link to="/#prod" onClick={this.handleClick}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/professional-services/"
                            activeClassName="active"
                            onClick={this.handleClick}
                        >
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link to="/about/" onClick={this.handleClick}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    };

    /**
     * render
     */
    render() {
        const { isMobileView } = this.props;
        const { isHome, fixed, showNavigations } = this.state;
        const headerclass = classnames({ fixed: fixed && isHome }, { nonHome: !isHome });
        return (
            <Layout.Header className={headerclass}>
                {isMobileView && this.renderNavigations()}
                <div className={'wrapper'}>
                    <Link to={'/'} className={'logo'} onClick={this.handleClick}>
                        <img width={300}  src={Logo} />
                    </Link>
                    {isMobileView && (
                        <Button onClick={this.handleClick}>
                            {showNavigations ? <CloseOutlined /> : <MenuOutlined />}
                        </Button>
                    )}
                    {!isMobileView && this.renderNavigations()}
                </div>
            </Layout.Header>
        );
    }
}

export default withResponsive(Header);
