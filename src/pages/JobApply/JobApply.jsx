import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const id = useParams();


    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedinUrl = form.linkedinUrl.value;
        const facebookUrl = form.facebookUrl.value;
        const githubUrl = form.githubUrl.value;
        const applicantInfo = {
            job_id: id?.id,
            applicantEmail: currentUser?.email,
            linkedinUrl,
            facebookUrl,
            githubUrl
        }

        fetch(`https://job-portal-server-three-gamma.vercel.app/job-apply`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(applicantInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Applied Successfully",
                        icon: "success",
                    }).then(navigate('/job-applications'))
                }
            })

    };

    return (
        <div className="hero my-10">
            <div className="hero-content">
                <div className="card bg-base-100  shadow-2xl">
                    <form onSubmit={handleOnSubmit} className="card-body w-[400px]">
                        <h2 className='font-semibold text-3xl text-center py-5'>Application Form: <span className='font-extralight text-xs'>{id?.id}</span> </h2>

                        <div className="form-control my-2 ">
                            <label className="label pb-1">
                                <span className="label-text">Linkedin Url</span>
                            </label>
                            <input name='linkedinUrl' type="linkedinUrl" placeholder="Linkedin Url" className="input focus:border-none w-full" required />
                        </div>
                        <div className="form-control my-2 ">
                            <label className="label pb-1">
                                <span className="label-text">Facebook Url</span>
                            </label>
                            <input name='facebookUrl' type="facebookUrl" placeholder="Facebook Url" className="input focus:border-none w-full" required />
                        </div>
                        <div className="form-control my-2">
                            <label className="label pb-1">
                                <span className="label-text">Github Url</span>
                            </label>
                            <input name='githubUrl' type="githubUrl" placeholder="Github Url" className="input focus:border-none w-full" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary w-full">Apply</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JobApply