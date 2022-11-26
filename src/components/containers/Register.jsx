import FormRegister from '../pure/forms/Register.jsx';
import { RegisterProvider } from '../../store/auth/providers/registerProvider.js';


// Functional Component
const Register = () => {
    return (
        <RegisterProvider>
            <FormRegister />
        </RegisterProvider>
    );
}

export default Register;
