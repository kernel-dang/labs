namespace CustomContractResolver.Model
{
    public class Property<T>
    {
        public T Value { get; set; }

        public string Modifier { get; set; }

        public string ModifyDate { get; set; }

        public string Source { get; set; }
    }
}