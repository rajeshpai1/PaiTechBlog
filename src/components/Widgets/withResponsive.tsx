import React from 'react';

type IProps = {};

interface IState {
    isMobileView: boolean;
}

const withResponsive = (Component: React.ComponentClass | React.FunctionComponent | any) => {
    return class ResponsiveHOC extends React.PureComponent<IProps, IState> {
        constructor(props: IProps) {
            super(props);
            this.state = {
                isMobileView: false,
            };
        }

        handleWindowSizeChange = () => {
            const { isMobileView } = this.state;
            if (isMobileView === true && window.innerWidth > 768) {
                this.setState({ isMobileView: false });
            } else if (isMobileView === false && window.innerWidth <= 768) {
                this.setState({ isMobileView: true });
            }
        };

        componentDidMount() {
            window.addEventListener('resize', this.handleWindowSizeChange);
            this.setState({
                isMobileView: window.innerWidth <= 768,
            });
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleWindowSizeChange);
        }

        render() {
            return <Component isMobileView={this.state.isMobileView} {...this.props} />;
        }
    };
};

export default withResponsive;
