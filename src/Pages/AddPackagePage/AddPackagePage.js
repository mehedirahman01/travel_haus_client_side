import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddPackagePage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory()
    const onPackageSubmit = data => {
        console.log(data)
        fetch("https://protected-stream-04533.herokuapp.com/addPackages", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Package Added")
                reset()
                history.push('/home')
            })
    }
    return (
        // Add Package Form 
        <div className="py-5">
            <h2>Please add a Package</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <form className="p-4" onSubmit={handleSubmit(onPackageSubmit)}>
                        <div className="mb-3">
                            <label>City</label>
                            <input className="form-control" placeholder="Destination City" {...register("city")} />
                        </div>

                        <div className="mb-3">
                            <label>Country</label>
                            <input className="form-control" placeholder="Country" {...register("country")} />
                        </div>

                        <div className="mb-3">
                            <label>Type</label>
                            <input className="form-control" placeholder="Tour Type" {...register("type")} />
                        </div>

                        <div className="mb-3">
                            <label>Cost</label>
                            <input className="form-control" placeholder="Cost" {...register("cost")} />
                        </div>

                        <div className="mb-3">
                            <label>Short Description</label>
                            <textarea className="form-control" placeholder="Short Description" id="floatingTextarea2" defaultValue="" style={{ height: "100px" }} {...register("shortDescription")}></textarea>
                        </div>

                        <div className="mb-3">
                            <label>Image Url</label>
                            <input required placeholder="Image url" className="form-control" {...register("imgUrl")} />
                        </div>

                        <input className="btn btn-success" type="submit" value="Add Package" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddPackagePage;