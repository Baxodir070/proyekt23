
function Slide() {
  return (
    <section className="px-12 relative mt-[35rem] md:mt-36 ">
      <div className="bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] rounded-xl px-24 py-24 gap-10 text-white flex flex-col md:flex-row text-center md:text-start items-center shadow-lg">
        <div className="relative w-[257px] h-[257px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/24e7/eefa/7ff1bdbd71b7ea85029c82a179b3eb28?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NlEQgZizfOZjiIa6H7gvmIo0X0VUVvVekV1BAG1lZZJ-L96CA3cLbw-eBvCehHx~ay0-fq7puCCZuhoWc5NrnXYdCJ67wCACH4HtRo-g5eMlAjCjNnk0EGJlKb8pWfAHA0bpQWdrFH7WmT-ZAcA0rp1Mcl2MLhK~4zdW~mC8HZSxOpsLermicPgxmyRVpDr0-fElCbXKUSYNLxZTryxXh9PmTS-i6kuXeC8hEhzQqGyJzM9oNn-S0nL50AhKqb-b-XRngvZfPlsKB7fqDvP8vdzm3D6Bv4Wasq8pwSwmWsv2RoA2hrzQrUk9-EXMUjTiZqOAs~uF1g7UUXV0I5JRNA__"
            alt="Profile"
            className="w-full shadow-2xl shadow-gray-500 h-full rounded-3xl object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 blur-lg opacity-75 -z-10"></div>
        </div>
        <div>
          <p className="text-xl mb-10 max-w-[952px]">
            It's all about getting your message in front of the right audience
            and creating those valuable relationships. Learn more about how
            DOML can help you do just that - all with a simple, easy-to-use
            platform.
          </p>
          <h3 className="text-2xl font-semibold">Amaka Micheal</h3>
          <span className="text-sm opacity-80">
            Media Executive, Buying & Control
          </span>
          <div className="mt-4 flex text-sm items-center gap-2">
            <p>DISCORD</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slide;