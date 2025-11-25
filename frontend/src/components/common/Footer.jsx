import logo from '../../assets/images/logo/sopatekLogo.png'

const Footer = () => {
  return (
    <footer className="bg-dark dark:bg-light text-white">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:items-start px-10">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="SopaTek Portfolio Logo" 
              className="h-16 w-auto"
            />
            <span className="lg:ml-3 text-2xl font-bold text-primary">SopaTek</span>
          </div>
          <p className='text-light dark:text-dark'>© {new Date().getFullYear()} Sopatek Portfolio. All rights reserved.</p>
        </div>

        {/* Contacts */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="font-bold text-lg text-light dark:text-dark">Contacts</p>
          <p className='text-light dark:text-dark'>Email : contact@esn.dev</p>
          <p className='text-light dark:text-dark'>Téléphone : +261 34 00 000 00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;