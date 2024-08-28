import FormImpressions from "../components/Admin/FormImpressions";
import AddNewForm from "../components/Admin/AddNewForm";
import AdminLayout from "../layouts/AdminLayout";

const ListForms = () => {
  return (
    <AdminLayout>
      <AdminLayout.Main>
        <div className="mt-10 flex-1 gap-x-5 gap-y-10 grid grid-cols-1  place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <AddNewForm />
          {[...new Array(30)].map((_, index) => (
            <FormImpressions
              key={index}
              createdAt=""
              name={""}
              submitted={0}
              viewed={0}
            />
          ))}
        </div>
      </AdminLayout.Main>
    </AdminLayout>
  );
};

export default ListForms;
