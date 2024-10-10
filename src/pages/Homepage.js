import React from 'react';

function Homepage() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src=" https://th.bing.com/th/id/R.bec9cc8b9cdbe891f18888067f36b5ab?rik=3%2fycEAeK1lr6Og&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2fd%2f0%2f868430-download-free-cute-puppies-wallpaper-hd-1920x1280-free-download.jpg&ehk=3nmucwagTTcT4gHyQHTc7HuhaqAkQRD5r%2bJa3GvROgw%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="Puppies sleeping on a blanket" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Puppy Love To Warm Your Heart</h5>
                            <p>Nothing beats a peaceful puppy nap.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/https://th.bing.com/th/id/OIP.zzOxHCQ5sIu05gwdEIaY2wHaDk?w=327&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7-https://th.bing.com/th/id/OIP.axH1FsnTPH4IRz9xLRnYKQHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7-8cc77767d783" className="d-block w-100" alt="Group of cute kittens" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Adorable Kittens</h5>
                            <p>Angles with whiskers</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://https://th.bing.com/th/id/OIP.BArOepPhazSmv6QGhnOdyQHaEg?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7.unsplash.com/photo-1588074138973-93cc7de0d800" className="d-block w-100" alt="White horse running on the beach" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Wild and Free</h5>
                            <p>A Dog May Be Men's Best Friend But Horses Wrote The History</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>





                <div className="row bg-#6f4e37-subtle text-wrap">
                    <p className="col-6 text-center text-primary fw-bold fs-3 ">
                        Animal companionship offers a unique bond that brings joy, comfort, and a sense of connection. Animals, with their unconditional love and loyalty, provide emotional support and companionship that can significantly improve mental well-being. Whether it’s the playful energy of a dog, the quiet presence of a cat, or the loyalty of a bird, animals offer a non-judgmental space where individuals can feel understood and valued. The companionship of an animal enriches daily life, bringing happiness, companionship, and a sense of responsibility.
                    </p>
                </div>
            </div>
    

        </>
    );
}

export default Homepage;
