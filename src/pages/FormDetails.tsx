import SidePanel from "../components/Admin/SidePanel";
import AdminLayout from "../layouts/AdminLayout";

const FormDetails = () => {
  return (
    <AdminLayout>
      <AdminLayout.Main>
        <div className="h-full flex items-center justify-center">
          <form className="max-w-lg w-full min-h-48 max-h-[40rem] bg-white flex flex-col">
            <div>
              <h2 className="p-3 bg-violet-800 outline-none w-full font-semibold tracking-wide text-white">
                Enter Form Name
              </h2>
            </div>
            <div className="p-3 space-y-4"></div>
            <button>Submit</button>
          </form>
        </div>
      </AdminLayout.Main>
      <AdminLayout.Side>
        <SidePanel />
      </AdminLayout.Side>
    </AdminLayout>
  );
};

export default FormDetails;
