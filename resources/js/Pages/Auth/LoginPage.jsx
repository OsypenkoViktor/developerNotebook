import LoginForm from "@/Components/LoginForm.jsx";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
export default function LoginPage(props){
    return (
        <div className="h-screen bg-gray-100 pt-4 flex items-center justify-between flex-col">
            <Header/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}
