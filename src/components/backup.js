<Collection
  items={myCircles}
  /*overrideItems={({ item }) => ({
  circles: (
    <div>
      {item.myCircles.map((myCircle) => (
        <>
          {myCircle.content}
          {/* <DashboardCircle overrides={DashboardPageOverrides} /> }
        </>
      ))}
    </div>
  ),
})}*/
>
  {(item, index) => (
    <Flex>
      {item.name?.map((name) => (
        <div key={index}>{name}</div>
      ))}
    </Flex>
  )}
</Collection>;
