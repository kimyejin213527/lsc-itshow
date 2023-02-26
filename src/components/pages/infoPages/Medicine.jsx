import React from 'react';
import './Medicine.css';

function Medicine(props) {
    return (
        <>
            <h1>상황별 약 추천 페이지</h1>
            <main id="home-card">
                <article class="card">
                    <div class="card-description">
                        <h3 class="card-title">
                            <div class="card-medname">
                                두통
                            </div>
                        </h3>
                        <figure class="card-image"></figure>
                    </div>
                </article>

                <article class="card">
                    <div class="card-description">
                        <h3 class="card-title">
                            <div class="card-medname">
                                생리통
                            </div>
                        </h3>
                        <figure class="card-image"></figure>
                    </div>
                </article>

                <article class="card">
                    <div class="card-description">
                        <h3 class="card-title">
                            <div class="card-medname">
                                근육통
                            </div>
                        </h3>
                        <figure class="card-image"></figure>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Medicine;