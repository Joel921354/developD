import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudListView() {
	const [cruds, setCruds] = useState([]);

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("/api/cruds");
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);

	return (
		<div className="container">
			<h2>
				CRUD - List View
				<p>
					<Link to="/cruds/new" className="btn btn-primary">
						Create CRUD
					</Link>
				</p>
			</h2>
			<hr />

			{cruds.map((crud) => {
				return (
					<div
						className="card mb-3"
						style={{ maxWidth: "800px" }}
						key={crud._id}
					>
						<div className="row g-0">
							<div className="col-md-4 pl-5 ">
								 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0bi_bFEkeG1opsXaT8SJeTrWcz9py1kQUIDMwU0rYSy-kQop1AloEF6KWwQbYx7GZf0&amp;usqp=CAU" className="img-fluid rounded-start" alt="..."/> 
								
							</div>
							<div className="col-md-8">
								<div class="card-header">
									<h5 className="card-title">
										<Link to={`/cruds/${crud._id}`} className="link-line">
											{crud.companyName}
										</Link>
									</h5>
								</div>
								<div className="card-body ">
									<h6 className="d-flex align-items-center">
										<i className="bi bi-telephone-fill text-success"></i>
										<a
											className="card-subtitle m-2"
											href={`tel:+${crud.phone}`}
										>
											{crud.phone}
										</a>
									</h6>
									<p className="card-text limit-char">{crud.description}</p>
									<p className="card-text  d-flex align-items-center">
										<i className="bi bi-geo-alt-fill text-warning"></i>
										<small className="text-muted one-liner">
											{crud.location}
										</small>
									</p>

									<div class="card-footer">
										<Link
											to={`/cruds/${crud._id}/edit`}
											className="btn btn-primary"
										>
											Edit
										</Link>
										<span>
											<small>
												<Link to={`/cruds/${crud._id}`} className="link-line">
													&nbsp; Read More...
												</Link>
											</small>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CrudListView;
