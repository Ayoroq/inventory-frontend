import CategoryForm from "../components/CategoryForm"

export default function CategoryEdit() {
    return (
        <div>
            <h1>Category Edit</h1>
            <p>Here you can edit a category</p>
            <CategoryForm 
                initialData={{}}
                onSubmit={(data) => console.log(data)}
                submitButtonText="Update Category" 
                submitAction="edit"/>
        </div>
    )
}