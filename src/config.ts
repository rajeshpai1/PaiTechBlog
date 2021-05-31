import _ from 'lodash';

const config = {
    production: {
        agent: {
            baseURL: 'http://arkagroups.in/',
        },
    },
    integration: {
        agent: {
            baseURL: 'http://localhost:8000/',
        },
    },
};

const getEnvironment = () => {
    let module;
    if (typeof window !== undefined) {
        module = { location: { host: 'localhost' } };
    } else {
        module = window;
    }

    return _.includes(_.get(module, 'location.host'), 'arkagroups.in')
        ? 'production'
        : 'integration';
};

const environment = getEnvironment();
export default {
    environment,
    agent: _.get(config, [environment, 'agent']),
};
