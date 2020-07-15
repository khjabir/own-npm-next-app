import { DTButton } from 'ui-antd-wrapper';

const Sample = () => {
    return (
        <DTButton 
            label="Plus Hello World"
            onClick={() => console.log('hello')}
            type="primary"
            icon={{name : 'PlusOutlined'}}
        />
    );
}

export default Sample;