using System.Data.Entity;

public class SubastaContext: DbContext
{


    public SubastaContext(string connectionString): base(connectionString)
    {

    }

    public  DbSet<ProductoEntity> productos { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}