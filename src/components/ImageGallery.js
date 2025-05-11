import React from 'react';

const ImageGallery = () => {
    const images = [

        './img2.jpg',
        './img3.jpg',
        'usc.jpeg',
        './img5.jpg',
        './img6.jpeg',
    ];

    return (
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${
                        index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                    }`}
                >
                    <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
