import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import RegistrationForm from "@/Components/RegistrationForm.jsx";
export default function LoginPage(props){
    return (
        <div className="h-screen bg-gray-100 pt-4 flex items-center justify-between flex-col">
            <Header/>
            <RegistrationForm/>
            <Footer/>
        </div>
    )
}
