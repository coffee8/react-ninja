import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer"

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'Test message: Yo'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Test message: Yo')
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={'Test message: Yo'}/>)
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'Test message: Yo'}/>)
        const root = component.root;
        expect( () => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test("after creation <span> should contain correct status", () => {
        const component = create(<ProfileStatus status={'Test message: Yo'}/>)
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('Test message: Yo');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'Test message'} updateUserStatus={ (mockCallback)}/>)
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
});