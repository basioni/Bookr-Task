import React from 'react';
const Home = () => {
    return (
      <>
        <div class="content-wrapper">
            <div class="content-header">
            <div class="container">
                <div class="row mb-2">
                <div class="col-sm-12">
                    <h2 class="m-0 text-left"> Bookr Task <small>Home</small></h2>
                </div>
                </div>
            </div>
            </div>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="text-left">ِApplication Brief</h3>
                                </div>
                                <div class="card-body">
                                    <h4 class="text-left">Task Features:</h4>
                                    <ol class="text-left">
                                        <li>Display a list of TODO items (each item must have a unique ID, title and description).</li>
                                        <li>Add items to list.</li>
                                        <li>Delete items from list.</li>
                                        <li>Edit items.</li>
                                        <li>Multi-user environment. Each user Login authorized bu Auth 2.0</li>
                                        <li>Support bigger set of devices/resolutions</li>
                                        <li>Implement ordering of items.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
};

export default Home;