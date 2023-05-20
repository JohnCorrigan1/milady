const MiladyMint = () => {
  return (
    <div className="flex flex-col md:flex-row lg:gap-10 md:gap-5 justify-between items-center">
      <div className="flex flex-col gap-5 bg-base-100 p-5 xl:p-10 rounded-lg shadow-xl w-full xl:w-1/2 ">
        <div className="flex flex-col">
          <label htmlFor="token">NFT to convert:</label>
          <select name="token" className="select select-primary">
            <optgroup label="Miladys">
              <option value="1">1</option>
              <option value="69">69</option>
              <option value="420">420</option>
            </optgroup>
            <optgroup label="Remillios">
              <option value="1">1</option>
              <option value="69">69</option>
              <option value="420">420</option>
            </optgroup>
            <optgroup label="Pixeladys">
              <option value="1">1</option>
              <option value="69">69</option>
              <option value="420">420</option>
            </optgroup>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center bg-base-300 rounded-lg p-3">
          <p>free mints: 420/1000</p>
          <p>Wallet limit: 0/5</p>
        </div>
        <button className="btn btn-primary">Mint</button>
        <button className="btn btn-secondary">Mint Multiple</button>
      </div>
      <img
        src="/assets/milady.png"
        alt="urmilady"
        className="2xl:w-1/4 xl:w-1/3 md:w-2/5 lg:w-1/3 w-3/4 hidden md:block"
      />
    </div>
  );
};

const MiWenchMint = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10 justify-between items-center">
      <div className="flex flex-col gap-5 bg-base-100 p-5 xl:p-10 rounded-lg shadow-xl w-full xl:w-1/2">
        <div className="flex flex-col justify-center items-center bg-base-300 rounded-lg p-3">
          <p>1 * 0.05eth = 0.05eth</p>
          <p>4200/10000</p>
        </div>
        <input type="number" className="input input-primary" placeholder="Amount" />
        <button className="btn btn-primary">Mint</button>
      </div>
      <img
        src="/assets/milady.png"
        alt="urmilady"
        className="2xl:w-1/4 xl:w-1/3 md:w-2/5 lg:w-1/3 w-3/4 hidden md:block"
      />
    </div>
  );
};

export { MiladyMint, MiWenchMint };
