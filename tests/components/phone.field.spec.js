import React from 'react';
import PhoneField from '../../src/components/PhoneField';
import renderer from 'react-test-renderer';

test('should only allow numeric, dash, and parentheses entries', ()=> {

    let value = '';
    let handleFieldChange = (e) => { value = e.target.value; };

    const phoneField = renderer.create(
        <PhoneField id="number-field" value={value}
                      handleFieldChange={handleFieldChange.bind(this)}/>,
    );
    let tree = phoneField.toJSON();
    expect(tree).toMatchSnapshot();

    let e = { target: { value: "42"}};
    tree.props.onChange(e);
    expect(value).toMatch('42');

    e = { target: { value: "bah" } };
    tree.props.onChange(e);
    expect(value).toMatch('');

    e = { target: { value: "(250)8674309" } };
    tree.props.onChange(e);
    expect(value).toMatch('(250)8674309');

    e = { target: { value: "+bah1(867)-5309)pooh!" } };
    tree.props.onChange(e);
    expect(value).toMatch('+1(867)-5309)');

});