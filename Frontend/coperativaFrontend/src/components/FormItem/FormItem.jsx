const FormItem = ({name, to}) => {
    return (
        <a href={to} className="flex items-center hover:scale-105 justify-center w-full flex-col rounded-2xl">
        <img src="https://cdn.pixabay.com/photo/2016/03/31/14/48/sheet-1292828_1280.png" alt="RentaFija" className="h-10 rounded-t-2xl" />
            <h3 className="text-white font-semibold text-center">
                {name}
            </h3>
        </a>
    );
};

export default FormItem;
