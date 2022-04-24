import { render, screen, fireEvent } from "@testing-library/react";
import { LoginForm } from "../LoginForm";

const handleSubmit = async ({ login,pass }) => {
    try {
        if (isSignUp) {
            await signUp(login, pass);
            setError(null);
        } else {
            await logIn(login, pass);
            setError(null);
        }
    } catch(e) {
        setError(e.message);
    }
}

describe('LoginForm', () => {
    it('Form contains e-mail', () => {
    const component = render(<LoginForm onSubmit={handleSubmit} isSignUp={true}/>);

    const text = component.getByText('E-mail');
    expect(text).toBeDefined();
    });

    it('Form contains password', () => {
        render(<LoginForm onSubmit={handleSubmit} isSignUp={true}/>);
    
        const text = screen.getByText('Password');
        expect(text).toBeDefined();
        });

});