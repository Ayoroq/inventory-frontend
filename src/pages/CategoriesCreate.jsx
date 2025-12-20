import CategoryForm from "../components/CategoryForm"
export default function CategoriesCreate() {
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <h1>Categories Create</h1>
            <p>Here you can create a new category</p>
            <CategoryForm 
                initialData={{}}
                onSubmit={onSubmit}
                submitButtonText="Create Category"
                submitAction="create" />
        </div>
    )
}